import React from "react";

export default function SingleVideo({ details }) {
  return (
    <div>
      {details && (
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${details.id}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <h3>{details.title}</h3>
          <p> {details.description} </p>
        </div>
      )}
    </div>
  );
}
