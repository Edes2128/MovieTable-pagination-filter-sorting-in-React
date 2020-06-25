import _ from 'lodash';

export function paginate(items,pageNumber,pageSize){

        const startIndex = (pageNumber - 1) * pageSize;
        _(items).slice(startIndex).ta
        _.slice(items,startIndex)    
}
