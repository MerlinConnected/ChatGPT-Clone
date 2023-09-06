import { CommandDialogDemo } from './components/app/Command'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { ConversationHistory } from './components/app/Sheet'
import MessageBox from './components/app/MessageBox'

function App() {
	return (
		<>
			<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
				<div className='flex flex-col justify-between content-center flex-wrap h-screen'>
					<div className=' w-full top-0 p-4  '>
						<div className='flex max-w-3xl items-center justify-between m-auto'>
							ChatGPT
							<div className='flex items-center space-x-1'>
								<ModeToggle />
								<ConversationHistory />
							</div>
						</div>
					</div>
					<div className='flex justify-center w-full mx-auto'>
						<div className='w-full max-w-3xl'>
							<MessageBox />
						</div>
					</div>

					<div className=' w-full bottom-0 p-4  '>
						<div className='flex max-w-3xl items-center space-x-1 m-auto'>
							<Input placeholder='Send a message' />
							<Button>Send</Button>
						</div>
						<div className='hidden sm:block'>
							<CommandDialogDemo />
						</div>
					</div>
				</div>
			</ThemeProvider>
		</>
	)
}

export default App
