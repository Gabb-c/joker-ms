import { describe, expect, it } from "bun:test";
import app from "../src";

describe("App", () => {
	it("Should return 200 Response and have the correct body", async () => {
		// Arrange
		const req = new Request("http://localhost/");

		// Act
		const res = await app.fetch(req);

		// Assert
		expect(res.status).toBe(200);
		expect(res.text()).resolves.toBe("Hello Hono!");
	});
});
