import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { RechercheController } from "../recherche.controller";
import { RechercheService } from "../recherche.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  adresseId: "exampleAdresseId",
  createdAt: new Date(),
  dateDeRecherche: new Date(),
  id: "exampleId",
  termeDeRecherche: "exampleTermeDeRecherche",
  updatedAt: new Date(),
  utilisateurId: "exampleUtilisateurId",
};
const CREATE_RESULT = {
  adresseId: "exampleAdresseId",
  createdAt: new Date(),
  dateDeRecherche: new Date(),
  id: "exampleId",
  termeDeRecherche: "exampleTermeDeRecherche",
  updatedAt: new Date(),
  utilisateurId: "exampleUtilisateurId",
};
const FIND_MANY_RESULT = [
  {
    adresseId: "exampleAdresseId",
    createdAt: new Date(),
    dateDeRecherche: new Date(),
    id: "exampleId",
    termeDeRecherche: "exampleTermeDeRecherche",
    updatedAt: new Date(),
    utilisateurId: "exampleUtilisateurId",
  },
];
const FIND_ONE_RESULT = {
  adresseId: "exampleAdresseId",
  createdAt: new Date(),
  dateDeRecherche: new Date(),
  id: "exampleId",
  termeDeRecherche: "exampleTermeDeRecherche",
  updatedAt: new Date(),
  utilisateurId: "exampleUtilisateurId",
};

const service = {
  createRecherche() {
    return CREATE_RESULT;
  },
  recherches: () => FIND_MANY_RESULT,
  recherche: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Recherche", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: RechercheService,
          useValue: service,
        },
      ],
      controllers: [RechercheController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /recherches", async () => {
    await request(app.getHttpServer())
      .post("/recherches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDeRecherche: CREATE_RESULT.dateDeRecherche.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /recherches", async () => {
    await request(app.getHttpServer())
      .get("/recherches")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateDeRecherche: FIND_MANY_RESULT[0].dateDeRecherche.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /recherches/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recherches"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /recherches/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/recherches"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateDeRecherche: FIND_ONE_RESULT.dateDeRecherche.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /recherches existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/recherches")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDeRecherche: CREATE_RESULT.dateDeRecherche.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/recherches")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
