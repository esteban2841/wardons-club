'use client'
export const GalleryVeticalPhotoTrisome = ({photosTriPack}) => {
  return (
    <figure>
        {photosTriPack?.map(photo=>{
          return <img src="" alt="" />  
        })}
        <figcaption>Baloncesto niños mixto villavicencio</figcaption>
    </figure>
  )
}
