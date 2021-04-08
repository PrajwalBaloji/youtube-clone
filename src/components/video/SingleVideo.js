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
          <h1>{details.title}</h1>
          <h4> {details.description} </h4>
        </div>
      )}
    </div>
  );
}
