import { BlockBuilderBase } from '../internal/base';
import { BlockType } from '../internal/constants';
import { SlackBlockDto } from '../internal/dto';
import { applyMixins } from '../internal/helpers';
import {
    BlockId,
    End,
} from '../internal/methods';

interface ColumnSettings {
    align?: 'left' | 'center' | 'right';
    is_wrapped?: boolean;
}

export interface TableParams {
    blockId?: string;
}

export interface TableBuilder extends BlockId,
    End {
    rows(rows: unknown[][]): this;
    columnSettings(settings: ColumnSettings[]): this;
}

/**
 * @@link https://api.slack.com/reference/block-kit/blocks#table
 * @@displayName Table
 */

export class TableBuilder extends BlockBuilderBase {
    /** @internal */

    /**
     * @description Sets the table rows. Each row is an array of cells (rich_text or raw_text).
     * @param {unknown[][]} rows - Array of rows, each containing cell objects.
     */
    public rows(rows: unknown[][]): this {
        this.props.rows = rows;
        return this;
    }

    /**
     * @description Sets column behavior settings.
     * @param {ColumnSettings[]} settings - Array of column settings with align and is_wrapped options.
     */
    public columnSettings(settings: ColumnSettings[]): this {
        this.props.columnSettings = settings;
        return this;
    }

    public build(): Readonly<SlackBlockDto> {
        return this.getResult(SlackBlockDto, {
            type: BlockType.Table,
            rows: this.props.rows,
            column_settings: this.props.columnSettings,
        });
    }
}

applyMixins(TableBuilder, [
    BlockId,
    End,
]);
