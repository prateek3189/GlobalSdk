class Session {
    _GLOBAL;

    init(globalObj) {
        this._GLOBAL = globalObj;
    }
}

Session = new Session()
export { Session };