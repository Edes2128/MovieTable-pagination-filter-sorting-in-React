import _ from 'lodash';

export function paginate(items,pageNumber,pageSize){

        const startIndex = (pageNumber - 1) * pageSize;
        _(items).slice(startIndex).take(pa)
        _.slice(items,startIndex)    
}
