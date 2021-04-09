import React, { useCallback, useEffect, useState } from 'react';

import lotsApi from '../api/lotsApi';
import LotsCard from '../components/LotsCard';

const City = ({ _location }) => {
    const [lots, setLots] = useState(null);

    const getLots = useCallback(async () => {
        let result = await lotsApi.getLots(_location);
        setLots(result.data);
    }, [_location]);

    useEffect(() => {
        getLots();
    }, [getLots]);

    return (
        <main>
            <h1>Lots in {_location}</h1>
            {lots ?
                lots.map(lot => <LotsCard lot={lot} key={lot.id} />)
                :
                <span>Loading</span>
            }
        </main>
    )
}

export default City
