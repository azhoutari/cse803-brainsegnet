'use client';

import { Group, rem, Button, Text } from '@mantine/core';
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUpload, IconX, IconLivePhoto } from '@tabler/icons-react';
import image from 'next/image';
import React, { useState } from 'react';

function ImageSelector({
	setImage,
}: {
	setImage: (file?: FileWithPath) => void;
}) {
	return (
		<Dropzone
			onDrop={(files) => {
				setImage(files[0]);
			}}
			onReject={(files) => console.log('rejected files', files)}
			maxSize={5 * 1024 ** 2}
			accept={IMAGE_MIME_TYPE}
			multiple={false}
			className="border-2 border-dashed mx-auto  rounded-lg w-full max-w-lg h-64 flex items-center justify-center"
		>
			<Group
				justify="center"
				gap="xl"
				mih={128}
				style={{ pointerEvents: 'none' }}
			>
				<Dropzone.Accept>
					<IconUpload
						style={{
							width: rem(52),
							height: rem(52),
							color: 'var(--mantine-color-blue-6)',
						}}
						stroke={1.5}
					/>
				</Dropzone.Accept>
				<Dropzone.Reject>
					<IconX
						style={{
							width: rem(52),
							height: rem(52),
							color: 'var(--mantine-color-red-6)',
						}}
						stroke={1.5}
					/>
				</Dropzone.Reject>
				<Dropzone.Idle>
					<IconLivePhoto
						style={{
							width: rem(52),
							height: rem(52),
							color: 'var(--mantine-color-dimmed)',
						}}
						stroke={1.5}
					/>
				</Dropzone.Idle>

				<div>
					<Text size="xl" inline>
						Click to select the MRI image
					</Text>
					<Text size="sm" c="dimmed" inline mt={7}>
						...or drag and drop the MRI image here
					</Text>
				</div>
			</Group>
		</Dropzone>
	);
}

export default ImageSelector;
