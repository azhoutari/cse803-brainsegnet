'use client';

import { Collapse, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import React from 'react';

// https://production-media.paperswithcode.com/thumbnails/task/1acce291-f809-41b2-b665-8ce57b31efb8.jpg

function ClassificationResults() {
	const [opened, { toggle }] = useDisclosure(true);

	return (
		<div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full max-w-md sm:max-w-2xl">
			<Image
				src="https://production-media.paperswithcode.com/thumbnails/task/1acce291-f809-41b2-b665-8ce57b31efb8.jpg"
				alt="Brain MRI"
				className="rounded-lg w-64"
			/>

			<div className="flex flex-col gap-2">
				<h2 className="text-2xl font-bold">Results</h2>

				<div className="flex flex-row gap-2 justify-between items-center">
					<p
						className="text-lg cursor-pointer text-start"
						onClick={toggle}
					>
						The model predicts that this MRI is of a brain tumor.
						Click to expand the results.{' '}
					</p>
					{opened ? (
						<IconChevronUp size={40} />
					) : (
						<IconChevronDown size={40} />
					)}
				</div>

				<Collapse in={opened}>
					<div className="flex flex-col gap-2 text-start">
						<p>
							<b>Confidence</b>: 0.95
						</p>

						<p>Meningioma - 0.90</p>
						<p>Glioma - 0.05</p>
						<p>Pituitary Tumor - 0.03</p>
						<p>Not a Tumor - 0.02</p>
					</div>
				</Collapse>
			</div>
		</div>
	);
}

export default ClassificationResults;
