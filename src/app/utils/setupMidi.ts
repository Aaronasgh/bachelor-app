"use client";

export const setupMidi = () => {
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

    const [status, data1, data2] = event.data;

    if (status === 254) {
      // Don't log active sensing messages
      return;
    }

    console.log(`Midi Status: ${status}, ${data1}, ${data2}`);
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
