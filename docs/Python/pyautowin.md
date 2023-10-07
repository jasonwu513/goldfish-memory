# automation


## pywinauto

pywinauto is a set of python modules to automate the Microsoft Windows GUI. At its simplest it allows you to send mouse and keyboard actions to windows dialogs and controls, but it has support for more complex actions like getting text data.



### install

```bash
pip install pywinauto
```

### example

```python
from pywinauto.application import Application 
app = Application().start("notepad.exe")
app.UntitledNotepad.Edit.type_keys("pywinauto Works!", with_spaces = True)
app.UntitledNotepad.menu_select("File -> Save As")
app.SaveAs.Edit.type_keys(r"C:\test.txt")
app.SaveAs.Save.click()
app.UntitledNotepad.menu_select("File -> Exit")
```


## pyautogui

PyAutoGUI is a cross-platform GUI automation Python module for human beings. Used to programmatically control the mouse & keyboard.