import axiosUtil from '../AxiosUtil';

const GetLoginInfo = (params) => {
    try 
        {
            const res = axiosUtil.get('/RentPriceTrendSvc/v1/getJeonseRentChangeRate?page=1&perPage=10&serviceKey=data-portal-test-key');
            return res;
        }
        catch (error) 
        {
            return error;
        } 
    
};

const GetId = (params) => {
    try 
        {
            const res = axiosUtil.post('/RentPriceTrendSvc/v1/getJeonseRentChangeRate/', { params: params });
            return res;
        }
        catch (error) 
        {
            return error;
        } 
    
};
const LoginApiSelector = (api, params) =>
{
    console.log('[LOG] API Name : ' + api + 'Params : ' + params);
    let res;

    switch(api)
    {
        case 'GetLoginInfo' :  res = GetLoginInfo(params); break;
        case 'GetId' :  res = GetId(params); break;
    }

    return res;
};

export { LoginApiSelector };