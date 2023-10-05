import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Button from "@/components/Button.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Button">
                <Button/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews