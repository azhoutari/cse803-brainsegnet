'use client';

import ClassificationResults from '@/components/ClassificationResults';
import ImageSelector from '@/components/ImageSelector';
import {
	ActionIcon,
	Avatar,
	Button,
	Group,
	Text,
	Tooltip,
} from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Home() {
	const [image, setImage] = useState<FileWithPath>();
	const [loading, setLoading] = useState(false);
	const [results, setResults] = useState<any>(null);

	const classify = async () => {
		setLoading(true);

		await sleep(1000);

		setResults('true');

		setLoading(false);
	};

	return (
		<div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
			<header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
				<Link href="/" className="flex space-x-2 items-center">
					<Avatar src="/favicon.ico" alt="Logo" size="sm" />
					<h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
						CSE 803 Project
					</h1>
				</Link>
				<div />
			</header>

			<main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-4 sm:mb-0 mb-8 max-w-4xl">
				<h1 className="mx-auto font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">
					Classify Brain MRI
				</h1>

				{results ? null : !image ? (
					<ImageSelector setImage={setImage} />
				) : (
					<>
						<Group className="w-full max-w-md sm:max-w-lg justify-between">
							<Text className="opacity-70 max-w-md">
								{image.name}
							</Text>
							<Tooltip label="Remove File">
								<ActionIcon
									onClick={() => setImage(undefined)}
									title="Remove image"
									aria-label="Remove image"
									variant="light"
									color="red"
								>
									<IconX />
								</ActionIcon>
							</Tooltip>
						</Group>

						<Button
							loading={loading}
							fullWidth
							className="mt-4 max-w-lg"
							color="dark"
							onClick={classify}
						>
							Classify
						</Button>
					</>
				)}

				{results && <ClassificationResults />}
			</main>

			<footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
				<div>
					Created by{' '}
					<a
						href="#"
						target="_blank"
						className="font-bold transition hover:text-black/50"
					>
						ALL OF US
					</a>{' '}
					(us@msu.edu).
				</div>
				<div className="flex space-x-4 pb-4 sm:pb-0">
					<Link
						href="https://github.com/Nutlope/restorePhotos"
						className="group"
						aria-label="TaxPal on GitHub"
					>
						<svg
							aria-hidden="true"
							className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
						>
							<path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
						</svg>
					</Link>
				</div>
			</footer>
		</div>
	);
}
