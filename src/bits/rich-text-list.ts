import { BitBuilderBase } from '../internal/base';
import { RichTextElementType } from '../internal/constants';
import { SlackDto } from '../internal/dto';
import { applyMixins, getBuilderResults } from '../internal/helpers';
import {
    Elements,
    End,
} from '../internal/methods';

export interface RichTextListParams {
    style?: 'bullet' | 'ordered';
    indent?: number;
    border?: 0 | 1;
}

export interface RichTextListBuilder extends End,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Elements<any> {
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#rich_text_list
 * @@displayName Rich Text List
 */

export class RichTextListBuilder extends BitBuilderBase {
    /** @internal */

    public build(): Readonly<SlackDto> {
        return this.getResult(SlackDto, {
            type: RichTextElementType.List,
            elements: getBuilderResults<SlackDto>(this.props.elements),
            style: this.props.style,
            indent: this.props.indent,
            border: this.props.border,
        });
    }
}

applyMixins(RichTextListBuilder, [
    End,
    Elements,
]);
