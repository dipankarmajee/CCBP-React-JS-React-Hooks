import {useState} from 'react'

import {MainDiv, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [deviceLock, setDeviceLock] = useState(true)
  const onClickUnlockButton = () => {
    setDeviceLock(prevDeviceStatus => !prevDeviceStatus)
  }
  return (
    <MainDiv>
      {deviceLock && (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <Paragraph>Your Device is Locked</Paragraph>
        </>
      )}
      {!deviceLock && (
        <>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <Paragraph>Your Device is Unlocked</Paragraph>
        </>
      )}
      <Button type="button" onClick={onClickUnlockButton}>
        {deviceLock ? 'Unlock' : 'Lock'}
      </Button>
    </MainDiv>
  )
}

export default Unlock
