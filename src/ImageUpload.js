import React, { useState } from 'react'
import './ImageUpload.css';
import { Avatar } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { storage, db } from "./firebase.js";
import './ImageUpload.css';
import firebase from "firebase";

function ImageUpload({ username }) {
    const [comment, setComment] = useState('');
    const [noLikes, setNoLikes] = useState(0);
    const [image, setImage] = useState('');
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);

    const uploadFileWithClick = () => {
        document.getElementsByClassName('imageFile')[0].click()
    }

    const handleUpload = (event) => {
        event.preventDefault()
        if (image == '') {
            db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                imageUrl: image,
                noLikes: noLikes,
                username: username
            })
            setCaption("")
        } else {
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                    alert(error.message);
                },
                () => {
                    storage
                        .ref("images")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            db.collection("posts").add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                caption: caption,
                                imageUrl: url,
                                noLikes: noLikes,
                                username: username
                            });
                        setProgress(0);
                        setCaption("")
                        setImage(null);
                    })
                }
            )
        }
    }

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    return (
        <div className="imageupload">
            <div className="imageupload__container">
                <div className="imageupload__firstSection">
                    <h3>Create Post</h3>
                </div>

                <div className="imageupload__secondSection">
                    <Avatar
                        className="imageupload__avatar"
                        alt=""
                    />
                    <input value={caption} type="text" onChange={(e) => setCaption(e.target.value)} placeholder={`What's on your mind ${username} ?`} />
                </div>
                <hr />
                <div className="uploadimage__options">
                    <div className="imageupload__imageupload" onClick={uploadFileWithClick}>
                        <img src="https://image.flaticon.com/icons/svg/3233/3233027.svg" className="imageupload__gallery" alt=""></img>
                        <input type="file" className="imageFile" onChange={handleChange} />
                        <h3>Photo</h3>
                    </div>
                    <div className="imageupload__more">
                        <img src="https://image.flaticon.com/icons/svg/860/860760.svg" className="imageupload__dots" alt="" />
                    </div>
                </div>
                <h2 className={`imageText ${image && 'show'}`}>Image is added and will be displayed after clicking the Post button</h2>
                <Button type="submit" onClick={handleUpload} className="imageupload__submitButton">Post</Button>
                <progress value={progress} max="100" className={`progress ${progress && 'show'}`} />
            </div>
        </div>
    )
}

export default ImageUpload
