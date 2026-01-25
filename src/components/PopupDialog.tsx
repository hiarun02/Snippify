import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { AlertDialog, AlertDialogCancel, AlertDialogFooter, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "./ui/alert-dialog";

type PopupDialogProps = {
    setIsCopied: (isCopied: boolean) => void;
    isCopied: boolean;
    cloudLink: string;
    isDialogOpen: boolean;
    setIsDialogOpen: (isDialogOpen: boolean) => void;
}

export default function PopupDialog({ setIsCopied, isCopied, cloudLink, isDialogOpen, setIsDialogOpen }: PopupDialogProps) {

    const copyToClipboard = () => {
        setIsCopied(true)
        navigator.clipboard.writeText(cloudLink);
        setTimeout(() => setIsCopied(false), 1000);
    };

    return (
        <AlertDialog open={isDialogOpen}>
            <AlertDialogContent>
                <VisuallyHidden>
                    <AlertDialogTitle>GGGG</AlertDialogTitle>
                </VisuallyHidden>
                <AlertDialogHeader>
                    <AlertDialogDescription>{cloudLink}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={copyToClipboard}>{isCopied ? 'Copied' : 'Copy'}</AlertDialogCancel>
                    <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>Close</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}