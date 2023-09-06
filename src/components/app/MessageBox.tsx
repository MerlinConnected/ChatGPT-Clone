import { CalendarDays } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

export default function MessageBox() {
	return (
		<>
			<div className=' w-full p-4 flex gap-5'>
				<HoverCard>
					<HoverCardTrigger asChild>
						<Avatar className='cursor-pointer'>
							<AvatarImage src='https://avatars.githubusercontent.com/u/61322673?s=400&u=3bd723863513faf88f5643895d613e393d62624a&v=4' />
							<AvatarFallback>MC</AvatarFallback>
						</Avatar>
					</HoverCardTrigger>
					<HoverCardContent className='w-80'>
						<div className='flex justify-between space-x-4'>
							<Avatar>
								<AvatarImage src='https://avatars.githubusercontent.com/u/61322673?s=400&u=3bd723863513faf88f5643895d613e393d62624a&v=4' />
								<AvatarFallback>MC</AvatarFallback>
							</Avatar>
							<div className='space-y-1'>
								<a href='https://github.com/MerlinConnected' className='text-sm font-semibold'>
									@MerlinConnected
								</a>
								<p className='text-sm'>Ouais le texte de description long la.</p>
								<div className='flex items-center pt-2'>
									<CalendarDays className='mr-2 h-4 w-4 opacity-70' />
									<span className='text-xs text-muted-foreground'>Joined August 2023</span>
								</div>
							</div>
						</div>
					</HoverCardContent>
				</HoverCard>
				<p>This is a random message made to test the styling of the site.</p>
			</div>
		</>
	)
}
