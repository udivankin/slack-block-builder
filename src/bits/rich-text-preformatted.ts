import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
import {
    Elements,
    End,
} from '../internal/methods';

export interface RichTextPreformattedParams {
    border?: 0 | 1;
}

export interface RichTextPreformattedBuilder extends End,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Elements<any> {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#rich_text_preformatted
 * @@displayName Rich Text Preformatted
 */

export class RichTextPreformattedBuilder extends BitBuilderBase {
    /** @internal */

    public build(): Readonly<SlackDto> {
        return this.getResult(SlackDto, {
            type: RichTextElementType.Preformatted,
            elements: getBuilderResults<SlackDto>(this.props.elements),
            border: this.props.border,
        });
    }
}

applyMixins(RichTextPreformattedBuilder, [
    End,
    Elements,
]);
