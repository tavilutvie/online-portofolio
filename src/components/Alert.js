import {
    Button,
    useDisclosure,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialog,
    AlertDialogFooter
  } from '@chakra-ui/react';
  import React from "react";

const DisplayAlert = () => {
    const { isOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    const handleOnRefresh = (event) => {
        event.preventDefault();
        window.location.reload(false)
      };

    return(
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                    SUCCESS
                </AlertDialogHeader>
                <AlertDialogBody>
                    Form has been submitted successfully!
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button colorScheme='blue' onClick={handleOnRefresh} ml={3}>
                    OK
                    </Button>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default DisplayAlert;