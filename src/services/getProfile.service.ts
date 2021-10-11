export class GetProfileService {     
    public getProfile(): Promise<any> {
        return fetch('https://reqres.in/api/users/3',{
            method: 'GET'
        })
    }    
}