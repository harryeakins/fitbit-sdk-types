declare module 'jpeg' {
	interface JpegDecodeOptions {
		delete?: boolean;
		overwrite?: boolean;
	}
	function decodeSync(
		filename: string,
		outputFilename: string,
		options?: JpegDecodeOptions,
	): void;
	function decode(
		filename: string,
		outputFilename: string,
		options?: JpegDecodeOptions,
	): void;
}
