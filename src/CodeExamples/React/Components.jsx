import React from "react"

export const AryasKillListTracker = (props) => {
    const [list, setList] = React.useState(props.oldList);
    const inputRef = React.useRef();

    const shouldDisableAdd = list.length === 20;
    
    
    return <div className="wrapper">
        <div className="list">
        <input ref={inputRef} type="text" />
        <CustomButton  label="Add to list" isDisabled={shouldDisableAdd} onClick={() => setList((prev) => [...prev, inputRef.current.value])} />
        </div>
        <CustomButton label="Send Kill List To Hitman" onClick={() => props.sendKillListToHitman()} />
    </div>
}


export function CustomButton(props) {
    return <button {...props}/>
}
 
  



