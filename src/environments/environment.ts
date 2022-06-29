export const ENVIRONMENT = {
  PRODUCTION: false,
  IP: "http://127.0.0.1:8081",
  MODULES: {
    COMMON: {
      CAROUSEL: {
        AUTO_PLAY: false,
        AUTO_PLAY_INTERVAL: 5000,
        PAUSE_ON_HOVER: true,
        DOTS: true,
        LOOP: true,
        ARROWS_OUT_SIDE: false,
        ARROWS_THEME_DARK: true,
        ARROWS: true
      },
      REGISTRATION: {
        ENABLED: true
      },
      CAREER: {
        ACCEPTABLE_UPLOAD_FILE_TYPES: ["application/pdf", ".pdf"]
      },
      WEB_APP: [
        {
          "type": "link",
          "name": "apple-touch-icon",
          "href": "../apple-touch-icon.png"
        }, {
          "type": "link",
          "name": "shortcut icon",
          "href": "../apple-touch-icon.png"
        }, {
          "type": "meta",
          "name": "mobile-web-app-capable",
          "content": "Yes"
        }, {
          "type": "meta",
          "name": "mobile-web-app-status-bar-style",
          "content": "black-translucent"
        }, {
          "type": "meta",
          "name": "apple-mobile-web-app-capable",
          "content": "Yes"
        }, {
          "type": "meta",
          "name": "apple-mobile-web-app-status-bar-style",
          "content": "black-translucent"
        }
      ]
    },
    PROFESSIONAL: {
      DASHBOARD: {
        ENABLED: true,
        ACTIVITIES: false
      },
      FILES: {
        ENABLED: true
      },
      MEDIA: {
        ENABLED: true
      },
      MEDICATION: {
        ENABLED: true
      },
      PROFILE: {
        ENABLED: true
      },
      QUESTIONNAIRE: {
        ENABLED: true
      }
    },
    USERS: {
      DASHBOARD: {
        ENABLED: true
      },
      FILES: {
        ENABLED: true
      },
      MEDIA: {
        ENABLED: true
      },
      MEDICATION: {
        ENABLED: true
      },
      PROFILE: {
        ENABLED: true
      },
      QUESTIONNAIRE: {
        ENABLED: true
      }
    }
  }
};
