const fs = require("fs");
module.exports = class SDKSDQ {
    query = []
    opts={}
    constructor(options) {
        this.opts = options
        try {
    
    
            fs.mkdirSync('./' + options['folder'])
    
        }
        catch (e) {
        
        }
        
    }
    PushItems(item_t) {
     this.query.push(item_t);
    }
    ResolveItems(q) {
        return this.query
    }
    Options() {
        return this.opts
    }
    async ResolveItemByString(string) {
        try {
            
            let array
            try {
                array = fs.readFileSync('./' + this.opts.folder  +"/" + string).toString().split("\n");
            } catch (e) {
                return SQLException.DATABASE_ERR;
            }
            return fs.existsSync('./' + this.opts.folder + "/" + string);
            
        }
        catch (e) {
            throw DOMException;
        }
    }
    ResolveItemContentByString(string) {
        try {
            
            let array
            try {
                array = fs.readFileSync('./' + this.opts.folder  +"/" + string).toString().split("\n");
            } catch (e) {
                return SQLException.DATABASE_ERR;
            }
            return array;
            
        }
        catch (e) {
            return null;
        }
    }
    first() {
        return this.query.shift()
    }
    client() {
    
    }
    DataSource=class {
        constructor(query, dbuf, content) {
            fs.writeFileSync('./' + query + "/" + dbuf, content)
        }
    
    }
    
    
}
module.exports.apiRequest = class Request {
    constructor(opts) {
    
    }
}
module.exports.FileWriter = class FileWriter {
    constructor(fileList, data) {
        fs.writeFileSync(fileList, data);
    }
}
