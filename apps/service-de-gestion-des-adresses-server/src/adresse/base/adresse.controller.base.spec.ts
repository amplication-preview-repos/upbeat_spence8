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
import { AdresseController } from "../adresse.controller";
import { AdresseService } from "../adresse.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  dateDeCreation: new Date(),
  derniReModification: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  identifiant: "exampleIdentifiant",
  instructions: "exampleInstructions",
  pointDeRepere: "examplePointDeRepere",
  updatedAt: new Date(),
  utilisateurId: "exampleUtilisateurId",
};
const CREATE_RESULT = {
  createdAt: new Date(),
  dateDeCreation: new Date(),
  derniReModification: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  identifiant: "exampleIdentifiant",
  instructions: "exampleInstructions",
  pointDeRepere: "examplePointDeRepere",
  updatedAt: new Date(),
  utilisateurId: "exampleUtilisateurId",
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    dateDeCreation: new Date(),
    derniReModification: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    identifiant: "exampleIdentifiant",
    instructions: "exampleInstructions",
    pointDeRepere: "examplePointDeRepere",
    updatedAt: new Date(),
    utilisateurId: "exampleUtilisateurId",
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  dateDeCreation: new Date(),
  derniReModification: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  identifiant: "exampleIdentifiant",
  instructions: "exampleInstructions",
  pointDeRepere: "examplePointDeRepere",
  updatedAt: new Date(),
  utilisateurId: "exampleUtilisateurId",
};

const service = {
  createAdresse() {
    return CREATE_RESULT;
  },
  adresses: () => FIND_MANY_RESULT,
  adresse: ({ where }: { where: { id: string } }) => {
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

describe("Adresse", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: AdresseService,
          useValue: service,
        },
      ],
      controllers: [AdresseController],
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

  test("POST /adresses", async () => {
    await request(app.getHttpServer())
      .post("/adresses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDeCreation: CREATE_RESULT.dateDeCreation.toISOString(),
        derniReModification: CREATE_RESULT.derniReModification.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /adresses", async () => {
    await request(app.getHttpServer())
      .get("/adresses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateDeCreation: FIND_MANY_RESULT[0].dateDeCreation.toISOString(),
          derniReModification:
            FIND_MANY_RESULT[0].derniReModification.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /adresses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/adresses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /adresses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/adresses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateDeCreation: FIND_ONE_RESULT.dateDeCreation.toISOString(),
        derniReModification: FIND_ONE_RESULT.derniReModification.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /adresses existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/adresses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateDeCreation: CREATE_RESULT.dateDeCreation.toISOString(),
        derniReModification: CREATE_RESULT.derniReModification.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/adresses")
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
