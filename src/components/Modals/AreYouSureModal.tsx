import React, { useRef, useState } from "react"
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react"
import { observer } from "mobx-react-lite"
import LayoutStore from "../../store/LayoutStore"
export const AreYouSure = observer(() => {
  const cancelRef = useRef()
  const [loading, setLoading] = useState(false)
  const onClose = () => {
    LayoutStore.alertModalClose()
  }
  const onSubmit = () => {
    setLoading(true)
    LayoutStore.alertModalState
      .callback()
      .then(e => {
        onClose()
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <AlertDialog
      isOpen={LayoutStore.alertModalisOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset="slideInBottom"
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {LayoutStore.alertModalState?.title}
          </AlertDialogHeader>

          <AlertDialogBody>
            {LayoutStore.alertModalState?.description}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button onClick={onClose} ref={cancelRef}>
              {LayoutStore.alertModalState?.no}
            </Button>
            <Button
              isLoading={loading}
              onClick={onSubmit}
              color="white"
              variant="success"
              bg={
                LayoutStore.alertModalState?.type=='success'
                  ? ""
                  : "danger.base"
              }
              ml={3}
            >
              {LayoutStore.alertModalState?.yes}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
})
