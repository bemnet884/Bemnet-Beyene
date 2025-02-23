import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { BorderBeam } from "./magicui/border-beam"
import { ArrowUpRightIcon } from "lucide-react"

export function ContactDialog() {
  return (
    <AlertDialog>
      <MaxWidthWrapper>

        <AlertDialogTrigger asChild>
          <Button variant={'default'}>
            Get In Touch <ArrowUpRightIcon className="ml-2 size-5" />
          </Button>

        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-3xl font-bold">Let's Make it Possible.</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="w-full max-w-2xl space-y-8">
                <div className="space-y-2">
                  <p className="text-gray-500 dark:text-gray-400">Please fill in the form below to get in touch.</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
                  </div>
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>

      </MaxWidthWrapper>
    </AlertDialog>
  )
}
