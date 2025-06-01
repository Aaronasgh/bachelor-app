"use client";

let sustainPedalHeld = false;
const sustainedNotes = new Set<number>();

export const setupMidi = (
  setActiveKeys: React.Dispatch<React.SetStateAction<Set<number>>>
) => {
  function listInputsAndOutputs(midiAccess: MIDIAccess) {
    for (const entry of midiAccess.inputs) {
      const input = entry[1];
      console.log(
        `Input port [type:'${input.type}']` +
          ` id:'${input.id}'` +
          ` manufacturer:'${input.manufacturer}'` +
          ` name:'${input.name}'` +
          ` version:'${input.version}'`
      );
    }

    for (const entry of midiAccess.outputs) {
      const output = entry[1];
      console.log(
        `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`
      );
    }
  }

  function onMIDIMessage(event: MIDIMessageEvent) {
    if (!event.data) {
      console.log("Received MIDI message with no data");
      return;
    }

    const [status, note, velocity] = event.data;

    if (status === 254) {
      // Don't log active sensing messages
      return;
    }

    if (status === 179 && note === 64 && velocity === 127) {
      sustainPedalHeld = true; // Sustain ON
    }

    if (status === 179 && note === 64 && velocity === 0) {
      sustainPedalHeld = false; // Sustain OFF
    }

    setActiveKeys((prevKeys) => {
      const updatedKeys = new Set(prevKeys);

      if (sustainPedalHeld === true && status === 147 && velocity > 0) {
        sustainedNotes.add(note); // Sustained Note ON
      }

      if (status === 147 && velocity > 0) {
        updatedKeys.add(note); // Note ON
      } else if (status === 147 && velocity === 0) {
        updatedKeys.delete(note); // Note OFF
      }
      console.log(`Midi Status: ${status}, ${note}, ${velocity}`);
      console.log("Active keys now:", Array.from(updatedKeys));
      console.log("sustainPedalHeld: ", sustainPedalHeld);
      return updatedKeys;
    });
  }

  function startLoggingMIDIInput(midiAccess: MIDIAccess) {
    midiAccess.inputs.forEach((entry) => {
      entry.onmidimessage = onMIDIMessage;
    });
  }

  function onMIDISuccess(midiAccess: MIDIAccess) {
    console.log("MIDI ready!");
    listInputsAndOutputs(midiAccess);
    startLoggingMIDIInput(midiAccess);
  }

  function onMIDIFailure(msg: string) {
    console.error(`Failed to get MIDI access - ${msg}`);
  }

  navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
};
