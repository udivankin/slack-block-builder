import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
import {
    Elements,
    End,
} from '../internal/methods';

export interface RichTextQuoteParams {
    border?: 0 | 1;
}

export interface RichTextQuoteBuilder extends End,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Elements<any> {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#rich_text_quote
 * @@displayName Rich Text Quote
 */

export class RichTextQuoteBuilder extends BitBuilderBase {
    /** @internal */

    public build(): Readonly<SlackDto> {
        return this.getResult(SlackDto, {
            type: RichTextElementType.Quote,
            elements: getBuilderResults<SlackDto>(this.props.elements),
            border: this.props.border,
        });
    }
}

applyMixins(RichTextQuoteBuilder, [
    End,
    Elements,
]);
