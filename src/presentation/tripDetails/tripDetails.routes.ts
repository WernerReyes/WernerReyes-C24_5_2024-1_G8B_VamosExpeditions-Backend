import { Router } from "express";
import { Middleware } from "../middleware";
import { TripDetailsController } from "./tripDetails.controller";
import { TripDetailsService } from "./tripDetails.service";
import { TripDetailsMapper } from "./tripDetails.mapper";
import { PdfService } from "@/lib";

export class TripDetailsRoutes {
  static get routes(): Router {
    const router = Router();

    const pdfService = new PdfService();
    const tripDetailsMapper = new TripDetailsMapper();
    const tripDetailsService = new TripDetailsService(
      tripDetailsMapper,
      pdfService
    );
    const tripDetailsController = new TripDetailsController(tripDetailsService);

    router.use(Middleware.validateToken);

    router.post("", tripDetailsController.upsertTripDetails);
    router.put("/:id", tripDetailsController.upsertTripDetails);
    router.get("", tripDetailsController.getTripDetails);
    // router.get("/:id", tripDetailsController.getTripDetailsById);
    router.get(
      "/version-quotation",
      tripDetailsController.getTripDetailsByVersionQuotationId
    );
    router.get("/pdf/:id", tripDetailsController.getTripDetailsPdf);
    router.get("/report/:id", tripDetailsController.getAllTripDetailsPdf);
    return router;
  }
}
