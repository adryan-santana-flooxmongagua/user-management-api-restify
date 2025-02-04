class HtppRequest{

    static get(url, params = {}){

       return HtppRequest.request('GET', url, params);

    }

    static delete(url, params = {}){

       return HtppRequest.request('DELETE', url, params);

    }

    static put(url, params = {}){

       return HtppRequest.request('PUT', url, params);

    }

    static post(url, params = {}){

        return HtppRequest.request('POST', url, params);
 
     }

    static request(method, url, params ={}){

        return new Promise((resolve, reject)=>{

            let ajax = XMLHttpRequest();

            ajax.open(method.toUppercase(), url);

            ajax.onerror = event =>{

                reject(e);

            };
    
            ajax.onload = event =>{  
    
                let obj = {}; 
    
                try{
                    let obj = JSON.parse(ajax.responseText);
    
                }catch(e){

                    reject(e);
                    console.error(e);
    
                }

                resolve(obj);
    
            };
    
            ajax.send();


        });

        


    }

}