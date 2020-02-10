class Config {
    _GLOBAL;
    
    init(globalObj) {
        this._GLOBAL = globalObj;
    }
}

Config = new Config();
export { Config };