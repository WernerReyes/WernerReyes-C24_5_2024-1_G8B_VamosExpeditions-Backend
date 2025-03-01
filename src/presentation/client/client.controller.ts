import { Request, Response } from "express";
import { AppController } from "../controller";
import { ClientDto } from "@/domain/dtos/client/client.dto";
import { CustomError } from "@/domain/error";
import { ClientService } from "./client.service";

export class ClientController extends AppController {
  constructor(private clientService: ClientService) {
    super();
  }
  
  public upsertClient = async (req: Request, res: Response) => {
    const [error, clientDto] = ClientDto.create({
      ...req.body,
      id: req.params.id,
    });
    if (error)
      return this.handleResponseError(res, CustomError.badRequest(error));

    this.handleError(this.clientService.upsertClient(clientDto!))
      .then((client) => res.status(200).json(client))
      .catch((error) => this.handleResponseError(res, error));
  };

  public getClientsAlls = async (req: Request, res: Response) => {
    this.handleError(this.clientService.getClientsAlls())
      .then((clients) => res.status(200).json(clients))
      .catch((error) => this.handleResponseError(res, error));
  };
}
