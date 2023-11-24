import React from 'react';
import images from "../../constants/images";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';



const ThreeDRoom = () => {
    return (
        <div>
            <ReactPhotoSphereViewer src={images.Room} height={'100vh'} width={"100%"}></ReactPhotoSphereViewer>
        </div>
    );
};

export default ThreeDRoom;
