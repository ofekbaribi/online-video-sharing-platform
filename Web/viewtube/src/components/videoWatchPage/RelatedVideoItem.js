import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RelatedVideoItem.css';
import buffering from '../../assets/loadin-place-holder.png'

function RelatedVideoItem({ id, title, author, views, date, videoURL }) {
  const [thumbnail, setThumbnail] = useState(buffering);
  const [duration, setDuration] = useState('');
  const canvasRef = useRef(null);

  useEffect(() => {
    if (videoURL) {
      captureThumbnail();
    }
  }, [videoURL]);

  const captureThumbnail = () => {
    const video = document.createElement('video');
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    video.src = videoURL;
    video.crossOrigin = 'anonymous'; // Allow cross-origin resource sharing if needed
    video.load();

    video.addEventListener('loadedmetadata', function () {
      const minutes = Math.floor(video.duration / 60);
      const seconds = Math.floor(video.duration % 60);
      setDuration(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    });

    video.currentTime = 7; 

    video.addEventListener('seeked', function () {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataURL = canvas.toDataURL();
      setThumbnail(dataURL); 
    }, { once: true });
  };

  return (
    <Link to={`/video/${id}`} className="no-link-style">
      <div className="relatedVideoItem">
      <div className="thumbnail-container">
          <img src={thumbnail} alt="video thumbnail" />
          <span className="video-duration">{duration}</span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <p className="card-text">{views} views • {date}</p>
        </div>
        <canvas ref={canvasRef} width="320" height="180" style={{ display: 'none' }}></canvas>
      </div>
    </Link>
  );
}

export default RelatedVideoItem;