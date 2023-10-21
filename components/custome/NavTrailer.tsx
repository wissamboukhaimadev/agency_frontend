import { Button } from '../ui/button'
import { Navigationbar } from './Navigationbar'

function NavTrailer() {
    return (
        <>
            <div className="bg-secondary flex justify-center p-2  ">
                <p className="p-2">trailer string </p>
                <div>
                    <Button variant="link">Learn more</Button>
                </div>
            </div>
            <Navigationbar />
        </>
    )
}

export default NavTrailer