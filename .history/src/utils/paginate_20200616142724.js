import _ from 'lodash';

export function paginate(items,pageNumber,pageSize){

        const startIndex = (pageNumber - 1) * pageSize;
        _(items)
        _.slice(items,startIndex)    
}
