import { ENVIRONMENT } from "src/environments/environment";

export class ProfessionalConfigurations {

    static isProfessionalDashboardEnabled() {
        if (ENVIRONMENT['MODULES']) {
            if (ENVIRONMENT.MODULES['PROFESSIONAL']) {
                if (ENVIRONMENT.MODULES.PROFESSIONAL['DASHBOARD']) {
                    return ENVIRONMENT.MODULES.PROFESSIONAL.DASHBOARD.ENABLED ? ENVIRONMENT.MODULES.PROFESSIONAL.DASHBOARD.ENABLED : false;
                }
                return false;
            }
            return false;
        }
        return false;
    }

    static isProfessionalDashboardActivitiesEnabled() {
        if (ENVIRONMENT['MODULES']) {
            if (ENVIRONMENT.MODULES['PROFESSIONAL']) {
                if (ENVIRONMENT.MODULES.PROFESSIONAL['DASHBOARD']) {
                    return ENVIRONMENT.MODULES.PROFESSIONAL.DASHBOARD.ACTIVITIES ? ENVIRONMENT.MODULES.PROFESSIONAL.DASHBOARD.ACTIVITIES : false;
                }
                return false;
            }
            return false;
        }
        return false;
    }
}