import app from "../src/app";
import request from "supertest";

describe("Common API routes", (): void => {
    it("health test", async (): Promise<void> => {
        const httpRequest = request(app).get("/_health");

        const response = await httpRequest.send();

        expect(response.status).toBe(200);
        expect(response.body.ping).toBe("pong");
    });
});
