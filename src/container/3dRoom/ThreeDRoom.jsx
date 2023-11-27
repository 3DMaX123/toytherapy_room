import React from 'react';
import './ThreeDRoom.css'
import images from "../../constants/images";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import { useNavigate } from 'react-router-dom';



const ThreeDRoom = () => {
    let navigate = useNavigate();

    return (
        <div>
            <div className='droom__buttons'>
                <button className='droom__buttons-returnBack' onClick={() => navigate(-1)}>повернутися назад</button>
                <button className='droom__buttons-toCatalog' onClick={() => navigate("/toytherapy_room/catalog")}>відкрити каталог</button>
            </div>
            <ReactPhotoSphereViewer src={images.Room} height={'100vh'} width={"100%"} defaultZoomLvl={1} className="threeDRoom_RotationSphere"></ReactPhotoSphereViewer>
        </div>
    );
};

export default ThreeDRoom;
