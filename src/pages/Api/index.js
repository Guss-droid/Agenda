import React from 'react';

function Tempo(request, response){
    const dynamicDate = new Date();

    response.json({
        date : dynamicDate.toGMTString()
    })

    return(
        <div>
            {dynamicDate}
        </div>
    )
}

export default Tempo;