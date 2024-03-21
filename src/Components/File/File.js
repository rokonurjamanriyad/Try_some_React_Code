import React from 'react';

const File = () => {
    let status=true;
    return (
        <div>
            {
                status?
                <button>dfks</button>
                :
                <button>kdfj</button>
            }
        </div>
    );
};

export default File;