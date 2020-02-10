import { Session } from "./session.jsx";
import { Config } from "./config.jsx";

class Core {
    _GLOBAL;

    init() {
        this._GLOBAL = {
            token: "MY_TOKEN"
        };
        this.initConfig();
        this.initSession();
    }

    initConfig() {
        Config.init(this._GLOBAL);
    }

    initSession() {
        Session.init(this._GLOBAL);
    }
}

Core = new Core();

export { Core };