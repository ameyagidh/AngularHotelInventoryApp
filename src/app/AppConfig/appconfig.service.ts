import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "../../environments/environment";

export const API_SERVICE_CONFIG = new InjectionToken<AppConfig>("app.Config");

export const API_CONFIG: AppConfig = {
    apiEndpoint: environment.apiEndpoint,
}
