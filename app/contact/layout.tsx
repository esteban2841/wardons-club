import { CardSkeleton } from "@/components/loaders/ImageSckeleton"

const Layout = ({children}) => {
  return (
    <article className="flex flex-row items-center 
    justify-center w-full"
    
    >
      {children}
    </article>
  )
}
export default Layout