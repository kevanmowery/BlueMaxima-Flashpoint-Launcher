import * as React from 'react';
import { IAdditionalApplicationInfo } from '../../shared/game/interfaces';
import { EditableTextWrap } from './EditableTextWrap';
import { CheckBox } from './CheckBox';
import { OpenIcon } from './OpenIcon';

export interface IBrowseSidebarAddAppProps {
  /** Additional Application to show and edit */
  addApp: IAdditionalApplicationInfo;
  /** Called when a field is edited */
  onEdit?: () => void;
  /** Called when a field is edited */
  onDelete?: (addApp: IAdditionalApplicationInfo) => void;
  /** Called when the launch button is clicked */
  onLaunch?: (addApp: IAdditionalApplicationInfo) => void;
  /** If the editing is disabled (it cant go into "edit mode") */
  editDisabled?: boolean;
}

export class BrowseSidebarAddApp extends React.Component<IBrowseSidebarAddAppProps, {}> {
  private onNameEditDone            = this.wrapOnEditDone((addApp, text) => { addApp.name = text; });
  private onApplicationPathEditDone = this.wrapOnEditDone((addApp, text) => { addApp.applicationPath = text; });
  private onCommandLineEditDone     = this.wrapOnEditDone((addApp, text) => { addApp.commandLine = text; });
  private onAutoRunBeforeChange     = this.wrapOnCheckBoxChange((addApp, isChecked) => { addApp.autoRunBefore = isChecked; });
  private onWaitForExitChange       = this.wrapOnCheckBoxChange((addApp, isChecked) => { addApp.waitForExit = isChecked; });

  constructor(props: IBrowseSidebarAddAppProps) {
    super(props);
    this.onLaunchClick = this.onLaunchClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  render() {
    const { addApp, editDisabled } = this.props;
    return (
      <div className='browse-sidebar__additional-application'>
        {/* Title & Launch Button */}
        <div className='browse-sidebar__row browse-sidebar__row--additional-applications-name'>
          <EditableTextWrap target={addApp} editDisabled={editDisabled}
                            text={addApp.name} onEditDone={this.onNameEditDone}
                            textProps={{title: addApp.name}}/>
          <input type="button" className="simple-button" value="Launch" onClick={this.onLaunchClick}/>
        </div>
        { editDisabled ? undefined : (
          <>
            {/* Application Path */}
            <div className='browse-sidebar__row browse-sidebar__row--one-line'>
              <p>Application Path: </p>
              <EditableTextWrap target={addApp} editDisabled={editDisabled}
                                text={addApp.applicationPath} onEditDone={this.onApplicationPathEditDone}
                                textProps={{title: addApp.applicationPath}}/>
            </div>
            {/* Command Line */}
            <div className='browse-sidebar__row browse-sidebar__row--one-line'>
              <p>Command Line: </p>
              <EditableTextWrap target={addApp} editDisabled={editDisabled}
                                text={addApp.commandLine} onEditDone={this.onCommandLineEditDone}
                                textProps={{title: addApp.commandLine}}/>
            </div>
            {/* Auto Run Before */}
            <div className='browse-sidebar__row'>
              <CheckBox className='browse-sidebar__row__check-box'
                        checked={addApp.autoRunBefore} onChange={this.onAutoRunBeforeChange}/>
              <p> Auto Run Before</p>
            </div>
            {/* Wait for Exit */}
            <div className='browse-sidebar__row'>
              <CheckBox className='browse-sidebar__row__check-box'
                        checked={addApp.waitForExit} onChange={this.onWaitForExitChange}/>
              <p> Wait for Exit</p>
              { !editDisabled ? (
                <div className='browse-sidebar__additional-application__delete-button'
                    onClick={this.onDeleteClick}>
                  <OpenIcon icon='trash' />
                </div>            
              ) : undefined}
            </div>
          </>
        ) }
      </div>
    );
  }

  private onLaunchClick(): void {
    if (this.props.onLaunch) {
      this.props.onLaunch(this.props.addApp);
    }
  }

  private onDeleteClick(): void {
    if (this.props.onDelete) {
      this.props.onDelete(this.props.addApp);
    }
  }

  private onEdit(): void {
    if (this.props.onEdit) {
      this.props.onEdit();
    }
  }

  /** Create a wrapper for a EditableTextWrap's onEditDone callback (this is to reduce redundancy) */
  private wrapOnEditDone(func: (addApp: IAdditionalApplicationInfo, text: string) => void) {
    return (text: string) => {
      func(this.props.addApp, text);
      this.onEdit();
    }
  }

  /** Create a wrapper for a CheckBox's onChange callback (this is to reduce redundancy) */
  private wrapOnCheckBoxChange(func: (addApp: IAdditionalApplicationInfo, isChecked: boolean) => void) {
    return (isChecked: boolean) => {
      if (!this.props.editDisabled) {
        func(this.props.addApp, isChecked);
        this.onEdit();
      }
    }
  }
}
