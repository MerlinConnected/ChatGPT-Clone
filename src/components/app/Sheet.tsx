import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet'

export function ConversationHistory() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant='outline'>History</Button>
			</SheetTrigger>
			<SheetContent side={'left'}>
				<SheetHeader>
					<SheetTitle>Conversation history</SheetTitle>
					<SheetDescription>See all your previous chats here.</SheetDescription>
				</SheetHeader>
				<div className='grid gap-4 py-4'></div>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
